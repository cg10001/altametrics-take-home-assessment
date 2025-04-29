# Introduction
This is a take home assessment for Altametrics. It's purpose is to build a small React application that will allow the user to login and view invoices. For simplicity's sake, many variables that would be secret or environmental variables are within the code, and the JWT token is stored in the Redux store. In a real application, these would be securely stored using appropriate methods (such as a http cookie in the case of the JWT token). Additionally, there are improvements that could be made in order to increase code maintainability (increased type-safety, creating separate files for repeated React components and functions, refactoring, etc).

# Prerequisites
1. Install Docker
2. Install Nodejs

# Running the Application
1. Run `docker compose up --build` in the root directory
2. Wait for this block of code to appear. This log within the terminal means that the server and database are up and running:
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
3. From the root directory in the terminal, run `cd client`
4. Run `npm install`
5. Run `npm run dev`
6. Wait for this code block to appear. It means the frontend is up and running.
```
> vite-template-redux@0.0.0 dev
> vite

11:47:24 AM [vite] (client) Re-optimizing dependencies because lockfile has changed

  VITE v6.3.3  ready in 557 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```
7. Visit  http://localhost:5173/ and login. There are two different logins, both will result in different invoices appearing.
```
email: username@email.com
password: password

email: username2@email.com
password: password
```