/**
 * Created by roee on 18/04/2016.
 */
// angular.module('app.common.directives')
//     .directive("countUp", function() {
//     return {
//         restrict: "A",
//         require: "ngModel",
//         scope: true,
//         link: function(scope, element, attrs) {
//             var animationLength, numDecimals;
//             numDecimals = 0;
//             animationLength = 4;
//             if ((attrs.numDecimals != null) && attrs.numDecimals >= 0) {
//                 numDecimals = attrs.numDecimals;
//             }
//             if ((attrs.animationLength != null) && attrs.animationLength > 0) {
//                 animationLength = attrs.animationLength;
//             }
//             return scope.$watch(attrs.ngModel, function(newVal, oldVal) {
//                 if (oldVal == null) {
//                     oldVal = 0;
//                 }
//                 if ((newVal != null) && newVal !== oldVal) {
//                     return new CountUp(attrs.id, oldVal, newVal, numDecimals, animationLength).start();
//                 }
//             });
//         }
//     };
// });