"use client"

import * as React from "react"
import { usePathname, useRouter } from '@/lib/navigation';
import { useTranslations } from 'next-intl';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useParams } from "next/navigation";

function ChangeLanguageMenu() {
    const router = useRouter()
    const pathname = usePathname()
    // const t = useTranslations('UserProfile');
    const setLanguage = (lang: 'ar' | 'en') => {
        // You can override the `locale` to switch to another language
        router.replace(pathname, { locale: lang });
    }
    const {locale} = useParams()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" >
                    {locale}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                 onClick={() => setLanguage("ar")}
                 >
                    العربية
                </DropdownMenuItem>
                <DropdownMenuItem 
                onClick={() => setLanguage("en")}
                >
                    English
                </DropdownMenuItem>
  
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default ChangeLanguageMenu
