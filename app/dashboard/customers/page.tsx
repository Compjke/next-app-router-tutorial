import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();

  if (!customers.length) {
    return <h2 className='text-lg text-fuchsia-300'>No customers at all</h2>;
  }
  return (
    <ol className='list-decimal gap-4 flex flex-col items-center grow h-full justify-center'>
      {customers.map((customer) => (
        <li key={customer.id} className='list-item text-xl'>
          {customer.name}
        </li>
      ))}
    </ol>
  );
}
