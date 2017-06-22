//
//  TKEduClassRoomProperty.h
//  EduClassPad
//
//  Created by ifeng on 2017/5/11.
//  Copyright © 2017年 beijing. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "TKMacro.h"
@interface TKEduClassRoomProperty : NSObject
//根据课堂返回的信息，可能重新复制
@property(nonatomic,copy) NSString * iRoomId;
@property(nonatomic,copy) NSString * iRoomName;
// RoomType_OneToOne   = 0,		    //小班
//RoomType_OneToMore  = 1,           //大班
@property(nonatomic,assign)RoomType iRoomType;
@property(nonatomic,assign)UserType iUserType;
@property(nonatomic,copy) NSString * iUserId;

//根据用户设置的信息，
@property(nonatomic,copy) NSString * sWebIp;
@property(nonatomic,copy) NSString * sWebPort;
@property(nonatomic,copy) NSString * sNickName;
@property(nonatomic,copy) NSString * sDomain;
@property(nonatomic,copy) NSString * sMeetingID;
@property(nonatomic,copy) NSString * sCmdPassWord;
@property(nonatomic,copy) NSString * sAuth;
@property(nonatomic,copy) NSString * sTS;
@property(nonatomic,copy) NSString * sLinkName;
@property(nonatomic,copy) NSString * sLinkUrl;
@property(nonatomic,copy) NSString * chairmanControl;

@property(nonatomic,assign) int  u32OtherID;
//用户自己设置的

@property(nonatomic,assign) int  sCmdUserRole;
@property(nonatomic,assign) int  sIsLiving;
@property(nonatomic,assign) bool  instFlag;
@property(nonatomic,assign) bool  bHorizontalScreen;
@property(nonatomic,assign) bool  bHideSelf;
@property(nonatomic,assign) bool  enableProximitySensor;
@property(nonatomic,assign) bool  videoType;

-(void)parseMeetingInfo:(NSDictionary*) params;
@end
