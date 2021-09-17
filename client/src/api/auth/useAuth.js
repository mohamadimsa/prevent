import axios from "../../axios/axios";
export const useAuth = () => {

    const authentification = async (email, password) => {
        try {

            let formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            const header = {
                "Content-Type": "multipart/form-data"
            }
            const response = await axios.post('/membre/auth', formData, header)
                .then(res => {
                    console.log(res.data)
                })
                .catch(e => {
                    console.log(e);
                })

        } catch (e) {
            console.log(e);
        }

    }

    return {
        authentification
    }
}