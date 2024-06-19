export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TabButton Component executing");
  return (
    <li>
      <button className={isSelected && "active"} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
