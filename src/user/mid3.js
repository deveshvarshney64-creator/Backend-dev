import joi from"joi"
import {StatusCodes} from "http-status-pro-js"
import logger from "../logger/logger.js";

function usermid3(res, req, next){
    try{
        let scheam = joi.object({
        name:joi.string().lowercase().min(2).max(200).required(),
        email:joi.string().trim().lowercase().email().min(8).max(200).required(),
        password: joi.string().trim().min(6).max(10).required()
        })
        let{} = scheam.validate(req.body)
        if(error){
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                massage:error.message,
                data: null
            })
            return
        }
        req.body = validateHeaderValue;
        next()

    }catch(error){
        console.log(error);
        logger("error", "server error")
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).js
        code: StatusCodes.INTERNAL_SERVER_ERROR.code,
        message: StatusCodes.INTERNAL_SERVER_ERROR.messege
    }
}