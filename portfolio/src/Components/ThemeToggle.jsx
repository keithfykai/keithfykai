import { HiOutlineComputerDesktop, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const modes = ["system", "light", "dark"];
const labels = { system: "Default (follow device)", light: "Light", dark: "Dark" };
const icons = { system: HiOutlineComputerDesktop, light: HiOutlineSun, dark: HiOutlineMoon };

export function ThemeToggle({ mode, onModeChange }) {
  const nextMode = modes[(modes.indexOf(mode) + 1) % modes.length];
  const Icon = icons[mode];

  return (
    <button
      type="button"
      onClick={() => onModeChange(nextMode)}
      aria-label={`Theme: ${labels[mode]}. Switch to ${labels[nextMode]}.`}
      title={`Theme: ${labels[mode]}. Switch to ${labels[nextMode]}.`}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-foreground hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      <Icon className="size-5" aria-hidden="true" />
    </button>
  );
}
