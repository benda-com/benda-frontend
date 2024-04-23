const apiUrls = {
    login: "http://127.0.0.1:8000/api/login",
    register: "http://127.0.0.1:8000/api/register-users",
}

export const signUpUser = async (email: string,first_name: string,last_name: string,password:string,user_type="gynecologist")  => {
    try {
        const response = await fetch(apiUrls.register, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            user_type:user_type,
            first_name: first_name,
            last_name: last_name,
            password:password
          }),
        });
    
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    

export const loginUser = async (email: string, password: string) => {
    const base64encodedData = Buffer.from(`${email}:${password}`).toString("base64");
    try {
        const response = await fetch(apiUrls.login, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Basic ${base64encodedData}`,
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
        });
        const result = await response.json();
        console.log("Success:", result);

    } catch (error) {
        console.error("Error:", error);
        
    }
} 