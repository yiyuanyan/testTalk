//
//  ViewController.m
//  EduClassPad
//
//  Created by ifeng on 2017/5/2.
//  Copyright © 2017年 beijing. All rights reserved.
//

#import "ViewController.h"
#import "TKEduClassRoom.h"
#import "TKMacro.h"
#import "TKUtil.h"
#import "TKPickViewTextField.h"
#import "TKAudioPlayer.h"
#define Class_NickName @"test"// 用户昵称

#ifdef Debug

//#define SERVER_ClassID @"107498408"
//#define SERVER_ClassID @"124985000"

//#define SERVER_ClassID @"515988769"
//
//#define SERVER_ClassID @"139297110"
#define SERVER_ClassID @"108623473"
#else
//#define SERVER_ClassID @"611754233"
//#define SERVER_ClassID @"966786993"
//572188581
#define SERVER_ClassID @"129466495"
#endif

#import "TKAVPlayerViewController.h"
@interface ViewController ()<TKEduEnterClassRoomDelegate,TKPickerViewDelegate>

@property (strong, nonatomic) IBOutlet UIImageView *iLogoImageView;
@property (strong, nonatomic) IBOutlet UIButton    *iEnterRoomButton;
@property (weak, nonatomic)   IBOutlet UITextField *iRoomIDTextField;
@property (weak, nonatomic)   IBOutlet UITextField *iNickNameTextField;
@property (strong, nonatomic) IBOutlet TKPickViewTextField *iRoleTextField;

@property (strong, nonatomic) IBOutlet UIView      *iRoomIDContainView;
@property (strong, nonatomic) IBOutlet UIView      *iNickNameTextFieldContainView;
@property (strong, nonatomic) IBOutlet UILabel     *roomLabel;
@property (strong, nonatomic) IBOutlet UILabel     *nicknameLabel;
@property (strong, nonatomic) IBOutlet UILabel     *iRoleLabel;
@property (assign, nonatomic) NSInteger iRole;


@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    UITapGestureRecognizer *tTap = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(tap:)];
    [_iEnterRoomButton setTitle:MTLocalized(@"Login.EnterRoom") forState:UIControlStateNormal];
    _roomLabel.text     = MTLocalized(@"Login.RoomId");
    _nicknameLabel.text = MTLocalized(@"Login.nickName");
    _iRoleLabel.text    =  MTLocalized(@"Login.Role");
    [self.view addGestureRecognizer:tTap];
    NSString *meetignID =[[NSUserDefaults standardUserDefaults] objectForKey:@"meetingID"];
    if (meetignID != nil && [meetignID isKindOfClass:[NSString class]])
    {
        _iRoomIDTextField.text = meetignID;
    }
    else
    {
        _iRoomIDTextField.text = SERVER_ClassID;
    }
    NSString *nickName =[[NSUserDefaults standardUserDefaults] objectForKey:@"nickName"];
    if (nickName != nil && [nickName isKindOfClass:[NSString class]])
    {
        _iNickNameTextField.text = nickName;
    }
    else
    {
        _iNickNameTextField.text = Class_NickName;
    }
    [ _iLogoImageView setImage:LOADIMAGE(@"LOGO")];
    _iRole = 0;//老师
    _iRoleTextField.iTKPickerViewDelegate = self;
    [TKUtil setCornerForView:_iRoomIDContainView];
    [TKUtil setCornerForView:_iNickNameTextFieldContainView];
    [TKUtil setCornerForView:_iEnterRoomButton];
  
   
}
//192.168.0.66:81
- (IBAction)joinRoom:(id)sender {
    
    
    NSString *tString = @"";
    if (_iRoomIDTextField.text == nil || _iRoomIDTextField.text.length == 0) {
       
        tString =  MTLocalized(@"Prompt.nicknameNotNull");//@"昵称不能为空";
    }
    if (_iNickNameTextField.text == nil || (_iNickNameTextField.text.length == 0)) {
        tString = MTLocalized(@"Prompt.RoomIDNotNull");
    }
    if ( ![tString isEqualToString:@""] )
    {
 
        UIAlertController *alter = [UIAlertController alertControllerWithTitle:MTLocalized(@"Prompt.prompt") message:tString preferredStyle:UIAlertControllerStyleAlert];
        UIAlertAction *tAction = [UIAlertAction actionWithTitle:MTLocalized(@"Prompt.Know") style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            
        }];
        
        [alter addAction:tAction];
        [self presentViewController:alter animated:YES completion:nil];
        return;
    }
   
    [[NSUserDefaults standardUserDefaults] setObject:_iRoomIDTextField.text forKey:@"meetingID"];
    [[NSUserDefaults standardUserDefaults] setObject:_iNickNameTextField.text forKey:@"nickName"];
    
    
    //https://192.168.0.182:8443/static/h5/index.html#/?pwd=1111&usertype=2&nickname=admin&roomname=jin&domain=www&param=xVUvLa19KNIGCRTiyiHTYiKp4YdLBhlKjafFGP3At0WQGDCq6AG22Y_1QJNlmLH9PHcGxcQPtRFo9sqO-OXfdtLwxoZn0EC5Hei4rSDmmD_48eA2ZF6YevXjRtCRi8d8&timestamp=1494840653
    // @"password":@"1111",
    
#ifdef Debug
   NSDictionary *tDict = @{
                           
      @"serial"   :_iRoomIDTextField.text,
      @"host"    :@"192.168.1.17",
      @"port"    :@"443",
      @"nickname":_iNickNameTextField.text,
      @"userid"  : @"1111",
      @"domain"   :@"www",
      @"userrole":@(_iRole)
      
      };
#else
    //http://global.talk-cloud.com/416457987/10032/1/2
    //    NSDictionary *tDict = @{
    //                            //@"serial"   :@"854633842",
    //                            //@"serial"   :@"158663598",
    //                            @"serial"   :_iRoomIDTextField.text,
    //                            //@"host"    :@"192.168.0.66",
    //                            @"host"    :@"global.talk-cloud.com",
    //                            @"port"    :@"443",
    //                            @"nickname":_iNickNameTextField.text
    //                            };
    NSDictionary *tDict = @{
                         
                            @"serial"   :_iRoomIDTextField.text,
                            //@"host"    :@"192.168.0.66",
                            @"host"    :@"global.talk-cloud.com",
                           // @"userid"  : @"1111",
                            @"port"    :@"443",
                            @"nickname":_iNickNameTextField.text,
                            @"userrole":@(_iRole)
                            };
    
#endif

   
    [TKEduClassRoom joinRoomWithParamDic:tDict ViewController:self Delegate:self];
  
}
#pragma mark TKEduEnterClassRoomDelegate
//error.code  Description:error.description
- (void) onEnterRoomFailed:(int)result Description:(NSString*)desc{
     TKLog(@"-----onEnterRoomFailed");
}
- (void) onKitout:(EKickOutReason)reason{
      TKLog(@"-----onKitout");
}
- (void) joinRoomComplete{
     TKLog(@"-----joinRoomComplete");
}
- (void) leftRoomComplete{
     TKLog(@"-----leftRoomComplete");
}
- (void) onClassBegin{
     TKLog(@"-----onClassBegin");
}
- (void) onClassDismiss{
    TKLog(@"-----onClassDismiss");
    [TKEduClassRoom leftRoom];
}
- (void) onCameraDidOpenError{
    TKLog(@"-----onCameraDidOpenError");
}


-(void)tap:(UITapGestureRecognizer*)aTap{
    [self.view endEditing:YES];
}

//https://global.talk-cloud.com:443/upload/20170520_202258_vlcdycdg.mp4
//https://global.talk-cloud.com/upload/20170520_202258_vlcdycdg-1.mp4
//设置样式
- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

//设置是否隐藏
- (BOOL)prefersStatusBarHidden {
    return NO;
}
//设置隐藏动画
- (UIStatusBarAnimation)preferredStatusBarUpdateAnimation {
    return UIStatusBarAnimationNone;
}

#pragma mark  TKPickerViewDelegate

-(void)tkPickerViewSelectedRole:(NSInteger)aRole{
    _iRole = aRole;
}
@end
