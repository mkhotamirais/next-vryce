import Link from "next/link";

interface IFooterMenu {
  title: string;
  list: { label: string; url: string }[];
  className?: string;
}

export default function FooterMenu({ title, list, className }: IFooterMenu) {
  return (
    <div className={className}>
      <h4 className="font-semibold text-xl mb-4">{title}</h4>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <Link
              href={item.url || "/"}
              className="text-gray-400 py-2 inline-block hover:underline hover:text-gray-200 transition-all"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
