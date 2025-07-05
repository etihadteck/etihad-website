import { supabase } from './supabase';
import { notFound } from 'next/navigation';

export async function getPackageById(id) {
  const { data, error } = await supabase
    .from('packages')
    .select(
      `
      packageId,
      shipments:shipmentId (
        status,
        arrivalDate
      )
    `,
    )
    .eq('packageId', id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return {
    packageId: data.packageId,
    status: data.shipments.status,
    arrivalDate: data.shipments.arrivalDate,
  };
}
