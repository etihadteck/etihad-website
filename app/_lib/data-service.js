import { supabase } from './supabase';
import { notFound } from 'next/navigation';

export async function getPackageById(id) {
  // The tables are staff-only; this database function returns just the
  // public tracking fields for one package
  const { data, error } = await supabase
    .rpc('get_public_package', { p_package_id: id })
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return {
    packageId: data.packageId,
    status: data.status,
    arrivalDate: data.arrivalDate,
    price: data.price,
    cbm: data.cbm,
    totalCount: data.totalCount,
    destination: data.destination,
    serialNumber: data.serialNumber,
  };
}
