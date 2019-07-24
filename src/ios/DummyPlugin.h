#import <Cordova/CDV.h>

@interface DummyPlugin : CDVPlugin

- (void)coolMethod:(CDVInvokedUrlCommand*)command;

-(NSString*)publicHelloWorld;


@end
