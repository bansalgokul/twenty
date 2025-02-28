import { StyledHeaderDropdownButton } from '@/ui/dropdown/components/StyledHeaderDropdownButton';
import { useDropdownButton } from '@/ui/dropdown/hooks/useDropdownButton';
import { TableOptionsDropdownId } from '@/ui/table/constants/TableOptionsDropdownId';

export const TableOptionsDropdownButton = () => {
  const { isDropdownButtonOpen, toggleDropdownButton } = useDropdownButton({
    dropdownId: TableOptionsDropdownId,
  });

  return (
    <StyledHeaderDropdownButton
      isUnfolded={isDropdownButtonOpen}
      onClick={toggleDropdownButton}
    >
      Options
    </StyledHeaderDropdownButton>
  );
};
