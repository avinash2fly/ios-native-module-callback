//
//  MyObjcClass.m
//  ios_native_module_test
//
//  Created by avinash gupta on 6/10/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "MyObjcClass.h"

@implementation MyObjcClass

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
  return @{@"greeting": @"Testing reactNative CallBack!"};
}

RCT_EXPORT_METHOD(squareMe:(NSString *)number:(RCTResponseSenderBlock)callback) {
  NSNumber *num = @([number intValue]);
  NSNumber *myValue = @([num integerValue] * [num integerValue]);
   NSLog(@"----------------%@",myValue);
  callback(@[[NSNull null], [NSNumber numberWithInt:([myValue integerValue])]]);}

@end
