const today: string = new Date().toDateString();

export function HeaderBlock({ invNumber }: { invNumber: string }) {
  return (
    <div>
      <h1>Invoice</h1>
      <div>
        <h2>Invoice: {invNumber}</h2>
      </div>
      <div>
        <h2>Date: {today}</h2>
      </div>
    </div>
  );
}
