import axios from "axios"

export const Get_Corona_virus_data = () => {
    axios.get('https://api.coronavirus.data.gov.uk/v1/data').then((res) => {
        return res
    })

}