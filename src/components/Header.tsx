interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="glass-header p-6 mb-8">
      <h1 className="text-3xl font-black bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-gray-400 font-medium">{subtitle}</p>
    </header>
  );
}