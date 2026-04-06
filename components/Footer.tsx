export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-[var(--card-border)]" role="contentinfo">
      <div className="max-w-4xl mx-auto text-center text-xs text-[var(--muted)]">
        <p>&copy; {new Date().getFullYear()} Bhavya Nirav Shah</p>
      </div>
    </footer>
  );
}
