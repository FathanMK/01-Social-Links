export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-cool-grey hover:bg-cool-green text-white hover:text-black transition-all py-3 w-full rounded-lg font-semibold">
      {children}
    </button>
  );
}
