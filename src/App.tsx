import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import "./App.css"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Static from "./components/ui/estatisticas"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
export function App(){
  return(

<div className="flex justify-center items-center min-h-screen gap-7">
  
    <Tabs defaultValue="account" className="Flex items-center justify-center w-[600px] h-[400px] ">
    <TabsList className="grid w-full grid-cols-2 bg-green-100">
      <TabsTrigger value="account">Conta</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Card>
        <CardHeader>
          <CardTitle>Conta</CardTitle>
          <CardDescription>
            Faça alterações na sua conta aqui. Clique em salvar quando terminar.
         </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Nata Hadrianus" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="@natahadrianus" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Salvar alterações</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="password">
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
             Altere sua senha aqui. Depois de salvar, você será desconectado.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="current">Senha Atual</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">Senha Nova</Label>
            <Input id="new" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save password</Button>
        </CardFooter>
      </Card>
    </TabsContent>
   </Tabs>
    
   <Static></Static>
   <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Editar perfil</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>



 </div>

   
  )
}