export function Boxes() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-arimo">
      <div className="w-4/5 h-1/2 bg-box rounded-xl"></div>
      <div className="w-full flex flex-col items-center text-center">
        <h3 className="text-body font-bold mt-2">Interactive text</h3>
        <p className="text-sub-body text-l-text w-3/4">Body text for whatever you’d like to add more to the for another Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}
