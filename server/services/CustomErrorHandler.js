class CustomErrorHandler extends Error{
    constructor(status,msg){
        super();
        this.status=status;
        this.message=msg;
    }
    static alreadyExists(message){
        return new CustomErrorHandler(409,message);
    }
    static mediaNotUploaded(){
        return new CustomErrorHandler(400,"Media not uploaded");
    }
}
export default CustomErrorHandler;