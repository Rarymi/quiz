import axios from "../../../../utils/axios.ts";

export const categoriees = async () => {
    try {
        const response = await axios.get('api_category.php');
        return response.data;
    } catch (error) {
        console.error('Erro ao obter a categoria:', error);
        throw error;
    }
};