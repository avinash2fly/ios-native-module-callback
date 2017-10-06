# ios-native-module-callback
Native modules callback test project for iOS

## Steps to Create

```cd ios/```

### Create a Header File

in my example *-MyObjcClass.h-*

And, insert the following code

```objectivec
#import <React/RCTBridgeModule.h>

@interface MyObjcClass : NSObject <RCTBridgeModule>

@end
```
