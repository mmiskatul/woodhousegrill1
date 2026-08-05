import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { BUSINESS } from "./data";

type Fields = {
  name: string;
  phone: string;
  date: string;
  time: string;
  party: string;
  notes: string;
};

const EMPTY: Fields = { name: "", phone: "", date: "", time: "", party: "2", notes: "" };

/** Client-side validation only — no invented backend integration. */
function validate(values: Fields): Partial<Record<keyof Fields, string>> {
  const errors: Partial<Record<keyof Fields, string>> = {};
  const name = values.name.trim();
  if (name.length < 2) errors.name = "Please enter your full name.";
  if (name.length > 80) errors.name = "Name must be under 80 characters.";

  const phone = values.phone.trim();
  if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) errors.phone = "Enter a reachable phone number.";

  if (!values.date) errors.date = "Choose a date.";
  else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(`${values.date}T00:00:00`) < today) errors.date = "Choose a date from today onward.";
  }

  if (!values.time) errors.time = "Choose a time.";

  const party = Number(values.party);
  if (!Number.isInteger(party) || party < 1 || party > 30)
    errors.party = "Party size must be between 1 and 30.";

  if (values.notes.length > 400) errors.notes = "Please keep notes under 400 characters.";
  return errors;
}

const inputClass =
  "w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

export function ReservationForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});

  const set = (key: keyof Fields) => (event: { target: { value: string } }) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please check the highlighted fields.");
      return;
    }
    toast.success("Request received", {
      description: `Thank you, ${values.name.trim()}. Our team will call ${values.phone.trim()} to confirm your table.`,
    });
    setValues(EMPTY);
  };

  const field = (key: keyof Fields, label: string, node: React.ReactNode) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={key} className="eyebrow text-[0.65rem] text-muted-foreground">
        {label}
      </label>
      {node}
      {errors[key] && (
        <p role="alert" className="text-xs text-destructive">
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {field(
        "name",
        "Full name",
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={set("name")}
          maxLength={80}
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          className={inputClass}
        />,
      )}
      {field(
        "phone",
        "Phone",
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          maxLength={20}
          autoComplete="tel"
          placeholder="01XXX-XXXXXX"
          aria-invalid={Boolean(errors.phone)}
          className={inputClass}
        />,
      )}
      {field(
        "date",
        "Date",
        <input
          id="date"
          name="date"
          type="date"
          value={values.date}
          onChange={set("date")}
          aria-invalid={Boolean(errors.date)}
          className={inputClass}
        />,
      )}
      {field(
        "time",
        "Time",
        <input
          id="time"
          name="time"
          type="time"
          value={values.time}
          onChange={set("time")}
          aria-invalid={Boolean(errors.time)}
          className={inputClass}
        />,
      )}
      {field(
        "party",
        "Party size",
        <select
          id="party"
          name="party"
          value={values.party}
          onChange={set("party")}
          className={inputClass}
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={String(n)}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
          <option value="15">13+ guests (private dining)</option>
        </select>,
      )}
      <div className="sm:col-span-2">
        {field(
          "notes",
          "Notes (optional)",
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={values.notes}
            onChange={set("notes")}
            maxLength={400}
            placeholder="Occasion, seating preference, dietary notes"
            className={inputClass}
          />,
        )}
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="w-full shrink-0 rounded-sm bg-primary px-6 py-3 font-display text-sm whitespace-nowrap uppercase tracking-[0.2em] text-primary-foreground shadow-ember transition-transform hover:scale-[1.02] sm:w-auto"
        >
          Request Table
        </button>
        <p className="text-xs text-muted-foreground">
          Prefer to speak with us? Call{" "}
          <a href={BUSINESS.phoneHref} className="text-primary underline-offset-4 hover:underline">
            {BUSINESS.phone}
          </a>
          . Reservations are recommended during peak hours.
        </p>
      </div>
    </form>
  );
}
