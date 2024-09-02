interface ListProps<T> {
  items: T[];
  onClick: (value: T) => void;
}

// Использование extends нужно, чтобы задать ограничение на тип T. В данном случае, вы говорите, что T может быть любым объектом.
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item as any}
          </div>
        );
      })}
    </div>
  );
};
