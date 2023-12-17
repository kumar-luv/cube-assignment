export interface Customer {
  id: number | null;
  name: string | null;
  title: string | null;
  address: string |null;
}
  
  const customers: Customer[] = [];
  
  for (let i = 1; i <= 1000; i++) {
    customers.push({
      id: i,
      name: `Customer ${i}`,
      title: `Title ${i} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada justo eu sapien varius, ac consequat lacus.`,
      address: `Address ${i}, City`,
    });
  }
  
  export default customers;
  