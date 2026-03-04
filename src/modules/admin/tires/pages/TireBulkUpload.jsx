import React from 'react'
import AdminForm from 'src/components/admin-ui/form/AdminForm'
import AdminGeneralLayout from 'src/layouts/admin/components/AdminGeneralLayout'
import useTireBulkUploadForm from 'src/hooks/useTireBulkUploadForm'
import FileDropZoneController from 'src/components/admin-ui/form/FileDropZoneController'

const TireBulkUpload = () => {

    const { control, handleSubmit, onSubmit } = useTireBulkUploadForm()

    return (
        <AdminGeneralLayout title="Carga masiva de llantas">
            <AdminForm onSubmit={handleSubmit(onSubmit)}>
                <FileDropZoneController name="file" control={control} />
            </AdminForm>
        </AdminGeneralLayout>
    )
}

export default TireBulkUpload