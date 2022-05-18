import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
    super({
        clientID: process.env.OAUTH_GOOGLE_ID,
        clientSecret: process.env.OAUTH_GOOGLE_SECRET,
        callbackURL: process.env.OAUTH_GOOGLE_CALLBACK,
        scope: ['email', 'profile'],
        })
    }
    
    validate(
        accessToken: string, 
        refreshToken: string, 
        profile: any, 
        ) {
            console.log("🧽🧽🧽🧽🧽"+profile)
    return {
        email: profile.emails[0].value,
        password: "qwer1234",
        name: profile.displayName,
        phone: '010-1234-5678',
    }
}
}