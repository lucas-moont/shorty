var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GetUrlErrorHandling } from "./errors/get-url-global-error-handling";
import { getShortenedLink } from "./get_shortened_link";
const shortLinkForm = document.querySelector(".shortLinkGenerator");
const shortLinkInput = document.querySelector(".shortLinkInput");
const errorText = document.querySelector(".errorText");
if (shortLinkForm && shortLinkInput) {
    shortLinkForm.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        yield createShortLinkHTMLStructure();
    }));
}
function createShortLinkHTMLStructure(url, shortenedLinksUl, errorText) {
    return __awaiter(this, void 0, void 0, function* () {
        const shortenedUrlObject = yield getShortenedLink(url);
        if (shortenedUrlObject.status === "error") {
            if (errorText) {
                throw new GetUrlErrorHandling(errorText);
            }
            throw new Error("Erro");
        }
        const li = document.createElement("li");
        const a = document.createElement("a");
        const button = document.createElement("button");
        const completeLinkSpan = document.createElement("span");
        const shortenedLinksInteraction = document.createElement("span");
        li.classList.add("shortenedLinkLi");
        a.classList.add("shortenedLinkAnchor");
        button.classList.add("copyShortenedLink", "cyanBtn", "lessRoundedBtn");
        completeLinkSpan.classList.add("completeLink");
        shortenedLinksInteraction.classList.add("shortenedLinksInteraction");
        a.href = shortenedUrlObject.shortUrl;
        a.innerText = shortenedUrlObject.shortUrl;
        button.innerText = "Copy";
        button.addEventListener("click", () => {
            navigator.clipboard.writeText("Copiado");
        });
        shortenedLinksInteraction.append(a, button);
        completeLinkSpan.innerText = url;
        li.append(completeLinkSpan, shortenedLinksInteraction);
        shortenedLinksUl.appendChild(li);
    });
}
