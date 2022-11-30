import Foundation

@objc public class egtsMain: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
