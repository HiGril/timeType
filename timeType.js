export function timeType(timestamp,timeType){
    if (timestamp) {
        let time = new Date(timestamp);
        let year = time.getFullYear();
        let month = (time.getMonth() + 1)>9 && (time.getMonth() + 1 ) || ('0' + (time.getMonth() + 1))
        let date = time.getDate()>9 && time.getDate() || ('0'+time.getDate())
        let hour = time.getHours()>9 &&time.getHours() || ('0' + time.getHours())
        let minute = time.getMinutes()>9 && time.getMinutes() || ('0' + time.getMinutes())
        let second = time.getSeconds() >9 &&  time.getSeconds() || ('0' + time.getSeconds())
        let YmdHis = '' 
        switch (timeType) {
            case 'YYYY-MM-DD  hh:mm:ss':
             YmdHis = `${year}-${month}-${date}  ${hour}:${minute}:${second}`
                break;
            case 'YYYY-MM-DD':
                YmdHis = `${year}-${month}-${date}`
                break;
            case 'YYYY-MM':
                YmdHis = `${year}-${month}`
                break;
            case 'YYYY':
                YmdHis = `${year}`
                break;        
            default:
                YmdHis = `${year}-${month}-${date}`
                break;
        }
        return YmdHis
    }else{
        return ""
    }
}


//  引入方式  
// import { timeType} from  'XXX'