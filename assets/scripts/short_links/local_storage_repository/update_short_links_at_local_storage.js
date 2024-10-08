var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { processShortLinksFromLocalStorage } from "./process_short_links_local_storage.js";
export function updateShortLinksAtLocalStorage(liElement) {
    return __awaiter(this, void 0, void 0, function* () {
        const { shortLinksLocalStorageArray } = yield processShortLinksFromLocalStorage();
        shortLinksLocalStorageArray.push(liElement.outerHTML);
        localStorage.setItem('short_links', JSON.stringify(shortLinksLocalStorageArray));
    });
}
