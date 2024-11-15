// register.jsx
import CommonForm from '@/components/common/form';
import { Toast } from '@/components/ui/toast';
import { loginFormControls } from '@/config';
import { toast, useToast } from '@/hooks/use-toast';
import { loginUser } from '@/store/auth-slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const initialState = {
  email: '',
  password: '',
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const  { toast } = useToast();


  function onSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(formData); // You can add your form submission logic here
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });                 
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold ml-2 tracking-tight text-foreground">SIGN IN</h1>
        <p>Don't have an account
          <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/register">
            Register</Link>
        </p>
      </div>
      <CommonForm 
        formControls={loginFormControls}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit} // Ensure this is passed correctly
      />
    </div>
  );
}

export default AuthLogin;