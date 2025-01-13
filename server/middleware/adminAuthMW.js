import jwt from 'jsonwebtoken'

export const adminAuth = async(req,res,next) => {

    try {
        const {token} =req.headers
        if(!token) {
            return res.json({success:false,message: 'Unauthorized, Login Again'})
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

            if(decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
                return res.json({success:false,message: 'Unauthorized, Login Again'})
            }
            // req.user = decoded
            next()
    } catch (error) {
        
    }
}

