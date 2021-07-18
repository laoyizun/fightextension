namespace fightext_utils {

    //------------ promise ------------
    interface TimeAction {
        delay:number,
        callback: ((sprite: Sprite) =>void)
    }

    export class Request {
        callbacks : TimeAction[] ;
        sprite: Sprite;
        constructor(sprite: Sprite) {
            this.sprite = sprite
            this.callbacks = []
        }

        pushCb(delay:number, cb : (sprite: Sprite) =>void) {
            this.callbacks.push({delay:delay, callback:cb})
        }

        pop() : TimeAction {
            return this.callbacks.removeAt(0)
        }

        isEmpty () :boolean {
            return this.callbacks.length == 0
        }
    }

    export function invoke() {
        const _currentRequest = currentRequest
        control.runInParallel(() => {
            while (!_currentRequest.isEmpty()) {
                let timeAction = _currentRequest.pop()
                pause(timeAction.delay)
                timeAction.callback(_currentRequest.sprite)
            }
        })
    }

    let currentRequest:Request = null;

    export function _getCurrentRequest() {
        return currentRequest
    }

    export function _setCurrentRequest(_currentRequest:Request) {
        currentRequest = _currentRequest
    }
}
