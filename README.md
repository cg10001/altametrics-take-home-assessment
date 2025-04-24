Did not have time to finish finish the server portion of the assessment. To test the client:

1. Run `docker compose up --build`
2. Wait for this block of code to appear. This code means that the server and database are up and running:
```
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [NestFactory] Starting Nest application...                                                                                                                                      
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [InstanceLoader] AppModule dependencies initialized +21ms
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [InstanceLoader] PrismaModule dependencies initialized +0ms
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [InstanceLoader] PassportModule dependencies initialized +0ms
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [InstanceLoader] JwtModule dependencies initialized +0ms                                                                                                                        
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [InstanceLoader] InvoiceModule dependencies initialized +0ms                                                                                                                    
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [InstanceLoader] AuthModule dependencies initialized +2ms                                                                                                                       
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [RoutesResolver] InvoiceController {/invoices}: +7ms                                                                                                                            
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [RouterExplorer] Mapped {/invoices, GET} route +4ms                                                                                                                             
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [RouterExplorer] Mapped {/invoices/:id, GET} route +1ms                                                                                                                         
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [RoutesResolver] AuthController {/auth}: +0ms
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [RouterExplorer] Mapped {/auth, POST} route +2ms                                                                                                                                
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [RouterExplorer] Mapped {/auth/profile, GET} route +0ms                                                                                                                         
server-1  | [Nest] 277  - 04/24/2025, 9:05:39 PM     LOG [NestApplication] Nest application successfully started +3ms   
```
3. Visit `http://localhost:3000/invoices` to view seeded data.

4. Visit `http://localhost:3000/invoices/:id` with id of choice (between 0-8) to view a singular invoice.

5. To test the auth route run on non-Windows machines, run the command:
```curl -X POST http://localhost:3000/auth -d '{"username": "username@email.com", "password": "password"}' -H "Content-Type: application/json"```. The output should be a access token in json format. For windows machines, add a "\" before every quotation. THe output should be a access token in json format. Copy that access token for the next step.

6. To test login was successful, run the command: ```curl http://localhost:3000/auth/profile -H "Authorization: Bearer <ACCESS_TOKEN_FROM_PREVIOUS_STEP>"``` The output should be: `{"id":0,"email":"username@email.com","name":"John Doe"}`
