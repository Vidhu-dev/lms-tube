import { Menubar, MenubarContent, MenubarItem, MenubarMenu } from '@repo/ui'

export default function Header() {
  return (
    <div>
      Header
      <Menubar>
        <MenubarMenu>
          <MenubarContent>
            <MenubarItem>Home</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
