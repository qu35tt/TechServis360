import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../components/ui/field"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";


export function Form() {
    const [result, setResult] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "21563340-5c47-499c-ad64-50b8cc82693a")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })

        const data = await response.json();
        if(data.success) {
            setResult("Form Submitted succesfully!")
            toast.success("Formulář byl odeslán!", { duration: 1000 })
            event.currentTarget.reset();
        } else {
            setResult("Error");
            toast.error("Ajéje! Nastala chyba odeslání!", { duration: 1000 })
        }

        console.log(result)
    }
    
    return(
        <div className="w-full h-auto bg-[#F4F0ED] flex flex-col lg:flex-row justify-between items-center p-8 space-y-20">
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:scale-150">
                <h1 className="text-[#244035] text-2xl font-bold">Napište si o nezávaznou nabídku</h1>
                <p className="text-xl font-light">Máte dotaz nebo potřebujete vyřešit problém s údržbou?<br></br> Vyplňte formulář a my se vám ozveme zpět</p>
                <Button onClick={() => document.querySelector("form")?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))} className="hidden lg:flex w-70 h-10 mt-30 bg-[#449315]" >Odeslat formulář!</Button>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center" id="form-Anchor">
                <form onSubmit={handleSubmit} className="w-full lg:w-2/4 h-full">
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="fullname">Jméno a Příjmení</FieldLabel>
                                <Input name="name" type="text" placeholder="Zadej své jméno..."/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input name="email" type="email" placeholder="Zadej svůj email..."/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="phone">Telefon</FieldLabel>
                                <Input name="phone" type="text" placeholder="Zadej svůj email..."/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="message">Váš dotaz</FieldLabel>
                                <Textarea 
                                    name="message"
                                    placeholder="Zde napište váš dotaz..."
                                    rows={8}
                                />
                            </Field>
                            <Field>
                                <Button type="submit" className="lg:hidden flex w-70 h-10 bg-[#449315]" >Odeslat formulář!</Button>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </form>
            </div>
        </div>
    )
}