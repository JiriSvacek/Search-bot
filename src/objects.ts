export interface Person {
    id: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: Company;
  }
  
  interface Company {
    name: string;
    bs: string
  }