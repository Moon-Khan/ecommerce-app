import { Request, Response } from "express";

export class BaseController {

    protected status: { HTTP_OK: number; HTTP_BAD_REQUEST: number; HTTP_INTERNAL_SERVER_ERROR: number };

    protected success: (req: Request, res: Response, status: number, data: any, message: string) => void;
    protected errors: (req: Request, res: Response, status: number, error: any) => void;
    
    constructor(){
        this.status= {
            HTTP_OK:200,
            HTTP_BAD_REQUEST:400,
            HTTP_INTERNAL_SERVER_ERROR:500
        };

        this.success = (req, res, status, data, message) =>{
            res.status(status).json({success:true, message, data})
        };

        this.errors = (req, res, status, error)=>{
            res.status(status).json({success: false, error: error.message || error })
        }
    }
}