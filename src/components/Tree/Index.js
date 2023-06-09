import Branch from './Branch/Index';

function Tree({ categories }) {
  return (
    <>
      {categories?.length > 0 && (
        <div>
          {categories?.map((el) => (
            <Branch key={el.id} item={el} level={0} />
          ))}
        </div>
      )}
    </>
  );
}

export default Tree;
