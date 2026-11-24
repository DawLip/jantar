"use client";

import Card from "@/components/structure/card/Card";
import TextInput from "@/components/input/TextInput";
import Button from "@/components/input/Button";

export default function LoginPage() {
    return (
        <Card className="w-[512px]" title="Logowanie">
            <TextInput label="Login" placeholder="Wprowadź login" value="" onChange={() => {}} />
            <TextInput label="Hasło" placeholder="Wprowadź hasło" value="" onChange={() => {}} />
            <Button label="Zaloguj" onClick={() => {}} />
        </Card>
    );
}
