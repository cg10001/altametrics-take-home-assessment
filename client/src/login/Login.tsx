import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import "./style.css"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { setUser } from "../app/userSlice"
import { useMutation } from "@tanstack/react-query"

export const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const formSchema = z.object({
    email: z
      .string()
      .min(3)
      .includes("@", { message: "Email must contain '@'" }),
    password: z.string().min(5),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const mutation = useMutation({
    mutationFn: user => {
      return axios.post("http://localhost:3000/auth", {
        username: user.email,
        password: user.password,
      })
    },
  })

  if (mutation.isSuccess) {
    const data = mutation.data.data
    dispatch(
      setUser({
        email: data.email,
        id: data.id,
        name: data.name,
        access_token: data.access_token,
      }),
    )
    navigate("/invoices")
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values)
  }

  return (
    <div className="inline-block text-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl className="border-4">
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl className="border-4">
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
