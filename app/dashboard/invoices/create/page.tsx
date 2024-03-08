import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';

export default async function CreatePage() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { href: '/dashboard/invoices', label: 'Invoices' },
          {
            href: '/dashboard/invoices/create',
            label: 'Create Invoices',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
