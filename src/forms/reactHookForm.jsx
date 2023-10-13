import { useForm } from "react-hook-form";

const reactHookForm = () =>{
const {register, handleSubmit, formState} = useForm({
    defaultValues: {
        email: "dwfault@email.com",
        password: "",
        confirmPassword: "",
    },
});

console.log(formState);
const handleSubmitForm =()=>{
    console.log("Form submit");
};

return(
<form onSubmit={handleSubmit(handleSubmitForm)}>
<div>
    <input></input>
</div>






</form>
)






























}
