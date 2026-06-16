export default function Footer() {
  return (
    <footer className="bg-background py-8 text-center text-sm text-foreground/60">
      <p>© {new Date().getFullYear()} La Trattoria, Sarajevo. Sva prava zadržana.</p>
      <p>Developed by ET</p>
    </footer>
  );
}
