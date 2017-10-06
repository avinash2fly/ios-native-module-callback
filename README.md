# ios-native-module-callback
Native modules callback test project for iOS

## Steps to Create

```cd ios/```

### Create a Header File

in my example **MyObjcClass.h**

And, insert the following code

```objectivec
#import <React/RCTBridgeModule.h>

@interface MyObjcClass : NSObject <RCTBridgeModule>

@end
```

### Create a .m cocoa touch class

in my example **MyObjcClass.m**

And, Insert the following code

```objectivec
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
```

### Changes in javascript file

in my example, App.js

#### import Modules

```javascript
var MyObjcClass = require('NativeModules').MyObjcClass;
```

#### Calling Function and receiving callback

```javascript
MyObjcClass.squareMe(num, (error, number) => {
      if (error) {
        console.error(error);
      } else {
        this.setState({number: number});
      }
    })
```

