//
//  AppDelegate.m
//  EduClassPad
//
//  Created by ifeng on 2017/5/2.
//  Copyright © 2017年 beijing. All rights reserved.
//

#import "AppDelegate.h"
//#import <HockeySDK/HockeySDK.h>
#import "HockeySDK.h"
#define CRASH_REPORT    @"http://global.talk-cloud.com/update/public"
@interface AppDelegate ()<BITHockeyManagerDelegate>

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    [[BITHockeyManager sharedHockeyManager] configureWithIdentifier:@"bfe4ad0dd2c941c3b3ce0453a0c6aa65"
                                                           delegate:self];
    [BITHockeyManager sharedHockeyManager].debugLogEnabled = YES;
    [BITHockeyManager sharedHockeyManager].serverURL = CRASH_REPORT;
    
    [[BITHockeyManager sharedHockeyManager] startManager];
    [[BITHockeyManager sharedHockeyManager].authenticator authenticateInstallation];
    
    if ([self didCrashInLastSessionOnStartup])
    {
        NSLog(@"------Crash detected.");
    }
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}
- (BOOL)didCrashInLastSessionOnStartup
{
    return ([[BITHockeyManager sharedHockeyManager].crashManager didCrashInLastSession] &&
            [[BITHockeyManager sharedHockeyManager].crashManager timeintervalCrashInLastSessionOccured] < 5);
}

#pragma mark - BITCrashManagerDelegate

- (void)crashManagerWillCancelSendingCrashReport:(BITCrashManager *)__unused crashManager
{
    if ([self didCrashInLastSessionOnStartup])
    {
        NSLog(@"crashManagerWillCancelSendingCrashReport");
        //[self setupApplication];
    }
}

- (void)crashManager:(BITCrashManager *)__unused crashManager didFailWithError:(NSError *)__unused error
{
    if ([self didCrashInLastSessionOnStartup])
    {
        NSLog(@"crashManagerWillCancelSendingCrashReport");
        //[self setupApplication];
    }
}

- (void)crashManagerDidFinishSendingCrashReport:(BITCrashManager *)__unused crashManager
{
    if ([self didCrashInLastSessionOnStartup])
    {
        NSLog(@"crashManagerWillCancelSendingCrashReport");
        //[self setupApplication];
    }
}

@end
