import { CustomerController } from "@/controllers/customer.controller.js";
import { CustomerRepository } from "@/repositories/customer.repository.js";
import { CustomerService } from "@/services/customer.service.js";

export function createCustomerController() {
   const customerRepository = new CustomerRepository();
   const customerService = new CustomerService(customerRepository);
   return new CustomerController(customerService)
}